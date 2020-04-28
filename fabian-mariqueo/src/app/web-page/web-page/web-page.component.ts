import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-web-page',
  templateUrl: './web-page.component.html',
  styleUrls: ['./web-page.component.scss']
})
export class WebPageComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // GitHub icon
    this.matIconRegistry.addSvgIcon(
      'github-brands',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/github-brands.svg')
    );

    // Linkedin icon
    this.matIconRegistry.addSvgIcon(
      'linkedin-brands',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/Icons/linkedin-brands.svg')
    );
  }

  ngOnInit(): void {
  }

}
