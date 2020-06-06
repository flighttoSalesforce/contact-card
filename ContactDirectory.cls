public with sharing class ContactDirectory {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactRecords(Id accountId){
        return [Select Id, Name, Title, Email, Department, Account.Name from Contact where AccountId = :accountId];
    }
}
