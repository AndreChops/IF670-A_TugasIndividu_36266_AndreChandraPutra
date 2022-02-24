import {
  IonCard,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, discOutline, heartOutline, heartSharp, helpCircleOutline, helpOutline, helpSharp, home, homeOutline, mailOutline, mailSharp, openOutline, paperPlaneOutline, paperPlaneSharp, pizzaOutline, settings, settingsOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Tips & Tricks',
    url: '/page/Tips',
    iosIcon: discOutline,
    mdIcon: discOutline
  },
  {
    title: 'Help & Support',
    url: '/page/Help',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleOutline
  },
  {
    title: 'Settings',
    url: '/page/Settings',
    iosIcon: settingsOutline,
    mdIcon: settingsOutline
  },

  
];

const labels = ['Home', 'Tips & Tricks', 'Help & Support', 'Settings'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent id="sidebar-menu">
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel id="sidebar-text">{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        <IonList className="sidebar-img">
          <IonCard id="sidebar-card">
            <IonCardTitle id="sidebar-title1">Get your claws around Joule today!</IonCardTitle>
            <IonCardTitle id="sidebar-title2">Check it Out! <IonIcon id="sidebar-icon" icon={openOutline}></IonIcon></IonCardTitle>         
          </IonCard>
          <div id="pointer"></div>
          <img className="sidebar-logo" src={'./assets/svg/crab.svg'} alt=""/>
        </IonList>
  </IonContent>
    </IonMenu>
  );
};

export default Menu;
