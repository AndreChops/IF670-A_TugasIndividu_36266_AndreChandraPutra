import React from 'react';
import { useRef, useState } from 'react';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemDivider, IonPage, IonRow, IonSearchbar, IonText, IonTitle, IonToolbar} from "@ionic/react";
import './SearchPage.css';
import SearchSegment from '../components/SearchSegment'
import { Link } from 'react-router-dom';
import { arrowBackCircleOutline, arrowBackOutline, closeCircle, closeOutline, text } from 'ionicons/icons';

const SearchPage: React.FC = () => {
    const [ switchSegment, setswitchSegment ] = useState<'All' | 'Joule' | 'Chef'>('All');
    const selectCalcUnitHandler = (selectedValue: 'All' | 'Joule' | 'Chef') => {
        setswitchSegment(selectedValue);
    }

    interface Guides {
        imageUrl: string;
        title: string;
        desc: string;
        category: string;
    }
      
    const Guides: Guides[] = [
        {
            title: 'Ultimate Chicken Breast',
            imageUrl: '../assets/image/chicken-1.jpg',
            desc: 'VISUAL DONENESS GUIDES',
            category: 'Guides'
        },
        {
            title: 'Basic Chicken Breast',
            imageUrl: '../assets/image/chicken-2.jpg',
            desc: 'VISUAL DONENESS GUIDES',
            category: 'Guides'
        },
        {
            title: 'Ultimate Chicken Thigh',
            imageUrl: '../assets/image/chicken-3.jpg',
            desc: 'VISUAL DONENESS GUIDES',
            category: 'Guides'
        },
        {
            title: 'Foolproof Fried Chicken',
            imageUrl: '../assets/image/chicken-4.jpg',
            desc: 'VISUAL DONENESS GUIDES',
            category: 'Guides'
        },
        {
            title: 'Juicy Grilled Chicken',
            imageUrl: '../assets/image/chicken-5.jpg',
            desc: 'VISUAL DONENESS GUIDES',
            category: 'Guides'
        },
    ];

    interface TimeTemp {
        imageUrl: string;
        title: string;
        desc: string;
        category: string;
    }

    const timeTemp: TimeTemp[] = [
        {
            title: 'Chicken Leg',
            imageUrl: '../assets/image/range.jpg',
            desc: '1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES',
            category: 'timeTemp'
        },
        {
            title: 'Chicken Breast',
            imageUrl: '../assets/image/range.jpg',
            desc: '45 MINUTES - 2 HOURS 15 MINUTES',
            category: 'timeTemp'
        },
        {
            title: 'Chicken Thigh',
            imageUrl: '../assets/image/range.jpg',
            desc: '1 HOUR - 1 HOUR 30 MINUTES',
            category: 'timeTemp'
        },
    ];

    interface ChefSteps {
        imageUrl: string;
        title: string;
        desc: string;
        category: string;
    }

    const ChefSteps: ChefSteps[] = [
        {
            title: 'Chicken Liver Pate',
            imageUrl: '../assets/image/chicken-6.jpg',
            desc: 'CHEFSTEPS.COM',
            category: 'ChefSteps',

        },
        {
            title: 'Chicken Wings',
            imageUrl: '../assets/image/chicken-7.jpg',
            desc: 'CHEFSTEPS.COM',
            category: 'ChefSteps'
        },
        {
            title: 'Korean Fried Chicken',
            imageUrl: '../assets/image/chicken-8.jpg',
            desc: 'CHEFSTEPS.COM',
            category: 'ChefSteps',
        },
        {
            title: 'Chicken Roulade',
            imageUrl: '../assets/image/chicken-9.jpg',
            desc: 'CHEFSTEPS.COM',
            category: 'ChefSteps'
        },
    ];


    
    return (
            <IonPage>
                <IonHeader className="search-header">
                    <IonToolbar>
                        <IonItem>
                            <IonIcon id="search-icon" slot="start" icon={closeOutline} />
                            <IonInput id="search-bar" value={"Chicken"} placeholder="Search"  slot="start"></IonInput>
                            <IonButton id="cancel-button" fill="clear" slot="end">
                                <Link className="no-decor" to={'/page/Home'}>
                                    <IonText id="cancel-label">Cancel</IonText>
                                </Link>
                            </IonButton>
                        </IonItem>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol className='pd-0'>
                                <SearchSegment selectedValue={switchSegment} onSelectValue={selectCalcUnitHandler}/>
                            </IonCol>
                        </IonRow>

                        {switchSegment === 'All' && (
                            <IonRow>
                                <IonCol className='ion-padding-start ion-padding-top font-color-gray'>
                                    <IonText>Visual Doneness Guides</IonText>
                                </IonCol>
                            </IonRow>
                        )}
                        
                        {/* All Segment */}
                        {switchSegment === 'All' && (
                            Guides.map((Guides, index) => { 
                                if(Guides.category === 'Guides'){
                                    return(
                                        <IonRow key={index}>
                                            <IonCol>
                                                <IonCard className="card-size">
                                                    <IonRow>
                                                        <IonCol className="img-size">
                                                            <IonImg src={Guides.imageUrl} style={{ width: 100, height: 100 }} />
                                                        </IonCol>

                                                        <IonCol size='8' className='pdt-4'>
                                                            <IonCardTitle className='font-type font-size-title'>{Guides.title}</IonCardTitle>
                                                            <IonCardSubtitle className='font-type font-size-subtitle'>{Guides.desc}</IonCardSubtitle>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    )
                                }
                            })
                        )}

                        {switchSegment === 'All' && (
                            <IonRow>
                                <IonCol className='ion-padding-start ion-padding-top font-color-gray'>
                                    <IonText>Just Time & Temp</IonText>
                                </IonCol>
                            </IonRow>
                        )}
                        
                        {/* All Segment */}
                        {switchSegment === 'All' && (
                            timeTemp.map((timeTemp, index) => { 
                                if(timeTemp.category === 'timeTemp'){
                                    return(
                                        <IonRow key={index}>
                                            <IonCol>
                                                <IonCard className="card-size">
                                                    <IonRow>
                                                        <IonCol className="img-pd">
                                                            <img src={timeTemp.imageUrl} style={{ width: 100, height: 100 }} className='img-radius' />
                                                        </IonCol>

                                                        <IonCol size='8' className='pdt-4'>
                                                            <IonCardTitle className='font-type font-size-title'>{timeTemp.title}</IonCardTitle>
                                                            <IonCardSubtitle className='font-type font-size-subtitle'>{timeTemp.desc}</IonCardSubtitle>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    )
                                }
                            })
                        )}

                        {switchSegment === 'All' && (
                            <IonRow>
                                <IonCol className='ion-padding-start ion-padding-top font-color-gray'>
                                    <IonText>ChefSteps.com Results</IonText>
                                </IonCol>
                            </IonRow>
                        )}
                        
                        {/* All Segment */}
                        {switchSegment === 'All' && (
                            ChefSteps.map((ChefSteps, index) => { 
                                if(ChefSteps.category === 'ChefSteps'){
                                    return(
                                        <IonRow key={index}>
                                            <IonCol>
                                                <IonCard className="card-size">
                                                    <IonRow>
                                                        <IonCol className='img-pd'>
                                                            <img src={ChefSteps.imageUrl} style={{ width: 100, height: 100 }} className='img-radius' />
                                                        </IonCol>

                                                        <IonCol size='8' className='pdt-4'>
                                                            <IonCardTitle className='font-type font-size-title'>{ChefSteps.title}</IonCardTitle>
                                                            <IonCardSubtitle className='font-type font-size-subtitle'>{ChefSteps.desc}</IonCardSubtitle>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    )
                                }
                            })
                        )}

                        {switchSegment === 'Joule' && (
                            <IonRow>
                                <IonCol className='ion-padding-start ion-padding-top font-color-gray'>
                                    <IonText>Visual Doneness Guides</IonText>
                                </IonCol>
                            </IonRow>
                        )}

                        {/* Joule App Segment */}
                        {switchSegment === 'Joule' && (
                            Guides.map((Guides, index) => { 
                                if(Guides.category === 'Guides'){
                                    return(
                                        <IonRow key={index}>
                                            <IonCol>
                                                <IonCard className="card-size">
                                                    <IonRow>
                                                        <IonCol className="img-size">
                                                            <IonImg src={Guides.imageUrl} style={{ width: 100, height: 100 }}/>
                                                        </IonCol>

                                                        <IonCol size='8' className='pdt-4'>
                                                            <IonCardTitle className='font-type font-size-title'>{Guides.title}</IonCardTitle>
                                                            <IonCardSubtitle className='font-type font-size-subtitle'>{Guides.desc}</IonCardSubtitle>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    )
                                }  
                            })
                        )}

                        {switchSegment === 'Joule' && (
                            <IonRow>
                                <IonCol className='ion-padding-start ion-padding-top font-color-gray'>
                                    <IonText>Just Time & Temp</IonText>
                                </IonCol>
                            </IonRow>
                        )}

                        {/* Joule App Segment */}
                        {switchSegment === 'Joule' && (
                            timeTemp.map((timeTemp, index) => { 
                                if(timeTemp.category === 'timeTemp'){
                                    return(
                                        <IonRow key={index}>
                                            <IonCol>
                                                <IonCard className="card-size">
                                                    <IonRow>
                                                        <IonCol className='img-pd'>
                                                            <img src={timeTemp.imageUrl} style={{ width: 100, height: 100 }} className='img-radius'/>
                                                        </IonCol>

                                                        <IonCol size='8' className='pdt-4'>
                                                            <IonCardTitle className='font-type font-size-title'>{timeTemp.title}</IonCardTitle>
                                                            <IonCardSubtitle className='font-type font-size-subtitle'>{timeTemp.desc}</IonCardSubtitle>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    )
                                } 
                            })
                        )}          

                        {switchSegment === 'Chef' && (
                            <IonRow>
                                <IonCol className='ion-padding-start ion-padding-top font-color-gray'>
                                    <IonText>ChefSteps.com Results</IonText>
                                </IonCol>
                            </IonRow>
                        )}
                        
                        {/* ChefSteps.com Segment */}
                        {switchSegment === 'Chef' && (
                            ChefSteps.map((ChefSteps, index) => { 
                                if(ChefSteps.category === 'ChefSteps'){
                                    return(
                                        <IonRow key={index}>
                                            <IonCol>
                                                <IonCard className="card-size">
                                                    <IonRow>
                                                        <IonCol className='img-pd'>
                                                            <img src={ChefSteps.imageUrl} style={{ width: 100, height: 100 }} className='img-radius' />
                                                        </IonCol>

                                                        <IonCol size='8' className='pdt-4'>
                                                            <IonCardTitle className='font-type font-size-title'>{ChefSteps.title}</IonCardTitle>
                                                            <IonCardSubtitle className='font-type font-size-subtitle'>{ChefSteps.desc}</IonCardSubtitle>
                                                        </IonCol>
                                                    </IonRow>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    )
                                }   
                            })
                        )}   
                    </IonGrid>
                </IonContent>

                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <Link className="no-decor" to={'/page/Home'}>
                    <IonFabButton className="floating-button" ><IonIcon id="fab-icon" icon={arrowBackOutline} /></IonFabButton>
                    </Link>
                </IonFab>
            </IonPage>
            
    );
};
export default SearchPage;

function setText(arg0: string): void {
    throw new Error('Function not implemented.');
}
