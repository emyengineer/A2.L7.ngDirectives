import { Directive, OnInit,
    ElementRef,
    Renderer2,
    HostListener,
    RendererStyleFlags2,
     HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) 
  {

  }
  
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', RendererStyleFlags2.Important);
    this.backgroundColor = 'blue';
  }
  
  @HostListener('mouseleave') mouseleave(eventData: Event)
  {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', RendererStyleFlags2.DashCase);
    this.backgroundColor = 'transparent';
  }

}
