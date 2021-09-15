import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  readonly ALPHABET_ARRAY: string[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

  readonly CHARACTER_WEIGHT: number = 20;

  constructor() { }

  createNewArray(gridDimension: number, inputCharacter: string): string[][] {
    let returnArry = [];

    let totalPushCharacter = Math.round((gridDimension * gridDimension) / this.CHARACTER_WEIGHT);
    let pushCharacterCount = 0;

    let characterIndex: number = null;

    if(inputCharacter) {
      characterIndex = this.ALPHABET_ARRAY.findIndex(x => x === inputCharacter.toLowerCase());
    }

    for (let i = 0; i < gridDimension; i++) {

      let innerArray: string[] = [];

      for (let y = 0; y < gridDimension; y++) {
        
        if(inputCharacter){
          if(pushCharacterCount <= totalPushCharacter){
            innerArray.push(inputCharacter.toLowerCase());
            pushCharacterCount = pushCharacterCount + 1;
          } else {
            let sameIndex: boolean = false;

            //While until he get a different value from one that is passed by input
            while(!sameIndex){
              let index = Math.floor(Math.random() * this.ALPHABET_ARRAY.length);
              if(index != characterIndex){
                innerArray.push(this.ALPHABET_ARRAY[index]);
                sameIndex = true;
              }
            }
          }
          
        } else {
          innerArray.push(this.ALPHABET_ARRAY[Math.floor(Math.random() * this.ALPHABET_ARRAY.length)]);
        }
      }

      returnArry.push(innerArray);
    }

    return returnArry;
  }

  generateNewCode(gridArray: string[][]): number {
    
    let currentSeconds: number = new Date().getSeconds();
    let secondsToString: string = '';

    if(currentSeconds < 10){
      secondsToString = '0' + currentSeconds;
    } else {
      secondsToString = currentSeconds.toString();
    }

    var secondsSplitArray: string[] = secondsToString.split('');

    let firstCharacter = gridArray[+secondsSplitArray[0]][+secondsSplitArray[1]];
    let secondCharacter = gridArray[+secondsSplitArray[1]][+secondsSplitArray[0]];

    let firstCharacterCount = 0;
    let secondCharacterCount = 0;

    for(let outterArray of gridArray){
      for(let innerArray of outterArray){
        if(innerArray === firstCharacter){
          firstCharacterCount = firstCharacterCount+1;
        }

        if(innerArray === secondCharacter){
          secondCharacterCount = secondCharacterCount+1;
        }
      }
    }

    if(firstCharacterCount > 9){
      firstCharacterCount = this.divideMethod(firstCharacterCount, 9);
    }

    if(secondCharacterCount > 9){
      secondCharacterCount = this.divideMethod(firstCharacterCount, 9);
    }

    return firstCharacterCount*10 + secondCharacterCount; 
  }

  private divideMethod(numberToDivide: number, minValue: number): number {
    let divideNumber = numberToDivide;
    let lowestInteger = 2;
    while(divideNumber > minValue){
      divideNumber = numberToDivide;
      let result = divideNumber / lowestInteger;
      result = Math.round(result);
      divideNumber = result;
      lowestInteger = lowestInteger+1;
    }

    return divideNumber;
  }
}
