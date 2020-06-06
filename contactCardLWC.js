import { LightningElement, api, wire } from 'lwc';
import getContactData from '@salesforce/apex/ContactDirectory.getContactRecords';
export default class ContactCardLWC extends LightningElement {
    @api recordId;
    @wire(getContactData, {accountId : '$recordId'}) contactData;

    handleAccountId(event){
        let accountId = event.detail.value[0];
        this.recordId = accountId;
    }

    addClass(event){
        let index = event.currentTarget.dataset.rowIndex;
        let draggableElement = this.template.querySelector('[data-id="' + index + '"]');
        draggableElement.classList.add('class1');
    }

    removeClass(event){
        let index = event.currentTarget.dataset.rowIndex;
        let draggableElement = this.template.querySelector('[data-id="' + index + '"]');
        draggableElement.classList.remove('class1');
    }
}