import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent {
  
  hidden = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}
