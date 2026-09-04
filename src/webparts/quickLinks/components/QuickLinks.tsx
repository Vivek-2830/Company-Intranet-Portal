import * as React from 'react';
import styles from './QuickLinks.module.scss';
import type { IQuickLinksProps } from './IQuickLinksProps';
import { escape } from '@microsoft/sp-lodash-subset';
import welcomeDark from '../assets/welcome-dark.png';
import welcomeLight from '../assets/welcome-light.png';
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/fields";
import "@pnp/sp/attachments";

export interface IQuickLinksState {

}

export default class QuickLinks extends React.Component<IQuickLinksProps, IQuickLinksState> {

  private sp:any;

  constructor(props: IQuickLinksProps, state: IQuickLinksState) {
    super(props);
    
    this.state = {
      
    };

    this.sp = spfi().using(SPFx(this.props.context));


  }

  public render(): React.ReactElement<IQuickLinksProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.quickLinks}`}>
        
      </section>
    );
  }
}
