import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderContent, PlaceholderName
} from '@microsoft/sp-application-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalMenu from './../../components/GlobalMenu';
export interface IItaGlobalNavigationV2ApplicationCustomizerProperties {
  
}

export default class ItaGlobalNavigationV2ApplicationCustomizer
  extends BaseApplicationCustomizer<IItaGlobalNavigationV2ApplicationCustomizerProperties> {
    private _topPlaceholder: PlaceholderContent | undefined;
    private _bottomPlaceholder: PlaceholderContent | undefined;
    @override
    public onInit(): Promise<void> {
      this._renderPlaceHolders();
      return Promise.resolve<void>();
    }
    private _renderPlaceHolders(): void {
      // Handling the top placeholder
      if (!this._topPlaceholder) {
        this._topPlaceholder = 
          this.context.placeholderProvider.tryCreateContent(
            PlaceholderName.Top,
            { onDispose: this._onDispose });
    
        // The extension should not assume that the expected placeholder is available.
        if (!this._topPlaceholder) {
          console.error('The expected placeholder (Top) was not found.');   
          return;  
        } 
        if (this._topPlaceholder.domElement)
        {
          ReactDOM.render(<GlobalMenu />,this._topPlaceholder.domElement);  
        }
      }
      // Handling the bottom placeholder  
      if (!this._bottomPlaceholder) {
        this._bottomPlaceholder =
          this.context.placeholderProvider.tryCreateContent(
            PlaceholderName.Bottom,
            { onDispose: this._onDispose });
  
        // The extension should not assume that the expected placeholder is available.
        if (!this._bottomPlaceholder) {
          console.error('The expected placeholder (Bottom) was not found.');
          return;
        } 
          if (this._bottomPlaceholder.domElement) {
            this._bottomPlaceholder.domElement.innerHTML = `
          <div>
            <div class="ms-bgColor-themeDark ms-fontColor-white">
              International Trade Administration
            </div>
          </div>`;
          }        
      }
    }
    private _onDispose(): void {
      console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
    }
}
