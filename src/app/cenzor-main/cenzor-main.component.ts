import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor-main',
  templateUrl: './cenzor-main.component.html',
  styleUrls: ['./cenzor-main.component.scss']
})
export class CenzorMainComponent {
  public badWords = 'java tottenham ';
  public text = '';
  public wordAdd = '';
  public addPlaceHolder = 'word here...'
  public textPlaceHolder = 'text here...'

  wordsAdd(): void {
    if (this.wordAdd != '') {
      this.badWords += this.wordAdd + ' ';
      this.addPlaceHolder = 'word here...'
      this.wordAdd = '';
    }
    else {
      this.addPlaceHolder = 'Please write a word!'
    }
  }

  wordsReset(): void {
    this.badWords = '';
    this.text = '';
  }

  cenzorText(): void {
    if (this.text != '') {
      this.textPlaceHolder = 'text here...'
      let badWordsArr = this.badWords.split(' ');
      let pop = badWordsArr.pop();
      let textArr = this.text.split(' ');

      for (let i = 0; i < badWordsArr.length; i++) {
        for (let j = 0; j < textArr.length; j++) {
          if (textArr[j] == badWordsArr[i]) {

            let func = () => {
              let cenz = '';

              for (let k = 0; k < textArr[j].length; k++) {
                cenz += '*';
              }

              return cenz;
            };

            textArr[j] = func();
          }
        }
      }

      this.text = textArr.join(' ');
    }

    else {
      this.textPlaceHolder = 'Please write a text!'
    }
  }
}
