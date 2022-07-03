import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-apps-es-lib',
  template: `
  <input type="text" (keydown.enter)="markText($event.target)">
    <div #content [hidden]="true">
     <ng-content> </ng-content>
    </div>

    <div [innerHTML]="controlledContent" ></div>
  `,
  styles: [
    `.mark{background-color: yellow}`
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppsEsLibComponent implements OnInit {

  @ViewChild('content') content: ElementRef | undefined;
  originalContent: string = "";
  controlledContent: string = "";
  i: any;
  constructor() { }

  ngOnInit(): void {
    this.showContent()
  }


  showContent() {

    this.i = setInterval(() => {
      if (this.content) {
        this.controlledContent = this.originalContent = this.content?.nativeElement.textContent;
      }
    }, 2000)
  }

  markText(e: any) {
    clearInterval(this.i)
    this.controlledContent = this.originalContent;
    this.controlledContent = this.originalContent.replace(new RegExp(e.value, 'g'), `<span class="mark">${e.value}</span>`)
  }

}
