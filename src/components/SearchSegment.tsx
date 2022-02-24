import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react";

const SearchSegment: React.FC <{
    selectedValue: 'All' | 'Joule' | 'Chef';
    onSelectValue: (value: 'All' | 'Joule' | 'Chef') => void
}>= props => {

    const inputChangeHandler = (event:CustomEvent) => {
        props.onSelectValue(event.detail.value);
    }

    return(
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler} color='dark'>
            <IonSegmentButton value="All">
                <IonLabel className="bold font-type">All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Joule">
                <IonLabel className="bold font-type">Joule App</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Chef">
                <IonLabel className="bold font-type">ChefSteps.com</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default SearchSegment;