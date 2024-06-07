import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAsyncLoader]'
})
export class AsyncLoaderDirective {
  public loading: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set appAsyncLoader(promise: Promise<any>) {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef);

    this.loading = true;
    promise.then(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.loading = false;
    });
  }
}
