import 'jquery';
import 'daterangepicker';

declare global {
  interface Window {
    jQuery: typeof jQuery;
    $: typeof jQuery;
  }
  
  interface JQuery {
    slick(options?: any): JQuery;
    ddslick(options?: any): JQuery;
    daterangepicker(options?: any): JQuery;
    niceSelect(options?: any): JQuery;
  }
}

export {};
