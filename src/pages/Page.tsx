import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackCircle, listCircle, logoFacebook, logoInstagram, logoTwitter, logoVimeo, qrCodeOutline, search, searchOutline, searchSharp, share } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import Splash from '../components/splash/Splash';
import './Page.css';

const Page: React.FC = () => {

  const [jouleSplash, setJouleSplash] = useState(false);

  useEffect(() => {
    setJouleSplash(true);
    setTimeout(() => {
      setJouleSplash(false);
    }, 2000);
  }, [])
  return (
    <IonPage>
      {
          jouleSplash ? <Splash /> : null
      }
      <IonHeader>
        <IonToolbar> 
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButton id="search-button" fill="clear">
            <Link className="no-decor"to={'/search'}>
              <IonText id="search-label">Search </IonText>
              <IonIcon id="search-icon" slot="end" icon={searchSharp} />
            </Link>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonRow>
        <div className="menu-img">
          <img id="menu-image" src="./assets/image/menu-image.png" alt=""/>
          <IonText class="menu-title1">Get Your Joule.</IonText>
          <IonText class="menu-title2">Be Happy.</IonText>
          <IonText class="explore">Explore</IonText>
        </div>
      </IonRow>

      <IonGrid>
        <IonRow>
          <IonTitle id="search-by">
            <h6 className="textline">Search By Type</h6>
          </IonTitle>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/beef.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Beef</p></h3>
            </IonCard>
          </IonCol>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/seafood.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Seafood</p></h3>
            </IonCard>
          </IonCol>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/poultry.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Poultry</p></h3>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/pork.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Pork</p></h3>
            </IonCard>
          </IonCol>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/lamb.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Lamb</p></h3>
            </IonCard>
          </IonCol>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/game.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Game</p></h3>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/vegetables.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Vegetables</p></h3>
            </IonCard>
          </IonCol>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/desserts.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Desserts</p></h3>
            </IonCard>
          </IonCol>
          <IonCol size="4">
            <IonCard className="margin-card">
              <IonCardContent className="bg-circle">
                <img className="card-icon" src={'./assets/svg/other.svg'} alt=""/>
              </IonCardContent>
              <h3 className="card-title"><p>Other</p></h3>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonTitle id="search-by">
            <h6 className="textline">Cooking Guides</h6>
          </IonTitle>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonCol>
           <IonCard>
            <IonCardContent className="left-side">
              <img className="guide-img" src={'./assets/image/guide-1.jpg'} alt=""/>
            </IonCardContent>
            <IonCardContent className="right-side">
              <IonText className="guide-text">Get Started: Basic Guides</IonText>
              <img className="copy-icon" src={'./assets/svg/copy.svg'} alt=""/>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent className="left-side">
              <img className="guide-img" src={'./assets/image/guide-1.jpg'} alt=""/>
            </IonCardContent>
            <IonCardContent className="right-side">
              <IonText className="guide-text">Quick & Easy</IonText>
              <img className="copy-icon" src={'./assets/svg/copy.svg'} alt=""/>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent className="left-side">
              <img className="guide-img" src={'./assets/image/guide-1.jpg'} alt=""/>
            </IonCardContent>
            <IonCardContent className="right-side">
              <IonText className="guide-text">Cook in a Jar - No Bag Required!</IonText>
              <img className="copy-icon" src={'./assets/svg/copy.svg'} alt=""/>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent className="left-side">
              <img className="guide-img" src={'./assets/image/guide-1.jpg'} alt=""/>
            </IonCardContent>
            <IonCardContent className="right-side">
              <IonText className="guide-text">All the Guides</IonText>
              <img className="copy-icon" src={'./assets/svg/copy.svg'} alt=""/>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent className="left-side">
              <img className="guide-img" src={'./assets/image/guide-1.jpg'} alt=""/>
            </IonCardContent>
            <IonCardContent className="right-side">
              <IonText className="guide-text">Joule Ready (Available in the US)</IonText>
              <img className="copy-icon" src={'./assets/svg/copy.svg'} alt=""/>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonGrid>

      </IonContent>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton className="floating-button" ><IonIcon id="fab-icon" icon={qrCodeOutline} /></IonFabButton>
      </IonFab>

    </IonPage>
  );
};

export default Page;
