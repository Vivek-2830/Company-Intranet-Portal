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
import groupIcon from '../assets/group.png';

export interface IQuickLinksState {

}

export default class QuickLinks extends React.Component<IQuickLinksProps, IQuickLinksState> {

  private sp: any;

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
      <section className={styles.quickLinks}>

        <div className={styles.header}>
          <h2>Quick Links</h2>
          <p>
            Frequently used employee resources, one click away.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.grid}>

          <a href="#" className={styles.card}>

            <div className={styles.cardTop}>

              <div className={styles.icon}>
                <img src={groupIcon} alt="HR Portal" />
              </div>

              <span className={styles.arrow}>↗</span>

            </div>

            <div className={styles.content}>
              <h3>HR Portal</h3>
              <p>Payroll, benefits &amp; requests</p>
            </div>

          </a>

          <a href="#" className={styles.card}>

            <div className={styles.cardTop}>

              <div className={styles.icon}>
                <img src={groupIcon} alt="HR Portal" />
              </div>

              <span className={styles.arrow}>↗</span>
              
            </div>

            <div className={styles.content}>
              <h3>IT Support</h3>
              <p>Raise and track IT tickets</p>
            </div>

          </a>

          <a href="#" className={styles.card}>

            <div className={styles.cardTop}>

              <div className={styles.icon}>
                <img src={groupIcon} alt="HR Portal" />
              </div>

              <span className={styles.arrow}>↗</span>
              
            </div>

            <div className={styles.content}>
              <h3>Employee Directory</h3>
              <p>Find colleagues instantly</p>
            </div>

          </a>

          <a href="#" className={styles.card}>

            <div className={styles.cardTop}>

              <div className={styles.icon}>
                <img src={groupIcon} alt="HR Portal" />
              </div>

              <span className={styles.arrow}>↗</span>
              
            </div>

            <div className={styles.content}>
              <h3>Leave Management</h3>
              <p>Apply and check balances</p>
            </div>

          </a>

          <a href="#" className={styles.card}>

            <div className={styles.cardTop}>

              <div className={styles.icon}>
                <img src={groupIcon} alt="HR Portal" />
              </div>

              <span className={styles.arrow}>↗</span>
              
            </div>

            <div className={styles.content}>
              <h3>Timesheet</h3>
              <p>Log weekly project hours</p>
            </div>

          </a>

          <a href="#" className={styles.card}>

            <div className={styles.cardTop}>

              <div className={styles.icon}>
                <img src={groupIcon} alt="HR Portal" />
              </div>

              <span className={styles.arrow}>↗</span>
              
            </div>

            <div className={styles.content}>
              <h3>Expense Claim</h3>
              <p>Submit and track claims</p>
            </div>

          </a>

          <a href="#" className={styles.card}>

            <div className={styles.cardTop}>

              <div className={styles.icon}>
                <img src={groupIcon} alt="HR Portal" />
              </div>

              <span className={styles.arrow}>↗</span>
              
            </div>

            <div className={styles.content}>
              <h3>Documents</h3>
              <p>Shared team libraries</p>
            </div>

          </a>

        </div>

      </section>
    );
  }
}
