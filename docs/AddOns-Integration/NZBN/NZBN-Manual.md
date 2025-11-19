---
title: Manual
sidebar_position: 1
sidebar_class_name: 'nav-det-level'
---

# <span className="fusion5-text">NZBN</span>

## Overview

This extension is designed to streamline the process of retrieving the following:
- New Zealand Business Numbers (NZBN)
- GST Registration no. 
- Registered address 

For vendors and customers, the extension queries the official [NZBN Register](https://www.nzbn.govt.nz/using-the-nzbn/nzbn-services/api/). It uses the NZBN API to search for entities based on their legal or trading names.

To use this service, you must have subscription to MBIE's [Cloud API Subscription Service](https://support.api.business.govt.nz/s/article/cloud-subscriptions)
Once subscribed, you will receive a subscription key which will be configured in Business Central (BC) to 
access or refresh the data on the service [here](https://portal.api.business.govt.nz/subscriptions).
>Note: The subscription key has one year expiration date, and an annual renewal is required. 

This manual describes the usage of the extensions functionality from Customer card, but it is also available for following pages: 
- Vendor card
- Company Information card (NZBN lookup only)

## Setup

To connect BC to MBIE Cloud Subscription Service, access __Company Information__ page from BC. 
Navigate to the _General_ fast tab and add the subscription key to __NZBN Subscription Key__ field. 
> Note: the subscription key is stored in an isolated password storage and will not be copied with any environment refreshes. 

## NZBN and company name lookup
1. On a customer card, enter __Name__. Then click on the Assist Edit button (...) next to the __NZBN__ under _Invoicing_ Fast tab.
![image.png](.img/image-b0ee531c-9ed4-43d6-abdd-23780ed8c826.png)

1. A list of NZBN numbers matching Customer __Name__ will appear. 
1. Select the appropriate line and click __OK__. 

Optional: It is possible to update customer card's _Name_ value to match the name on NZBN record by clicking __Edit List__ and ticking the _Update Name_ checkbox and click __OK__.

![NZBNlookup.png](.img/NZBNlookup-bbd12339-204a-479d-b3a2-c09ff4e86c68.png)

If the company cannot be found or returns too many records, click on __Edit List__ and modify the search value to improve the results. 
> Note: (_tab_) out of the field to trigger a refresh. 

## GST Registration No. lookup

Once the NZBN is set: 

1. Click the Assist Edit button (...) next to the __GST Registration No.__ field under _Invoicing_ fast tab. 
1. A list of GST numbers associated with the NZBN will appear. Either select GST no. or click __OK__ to select. 
1. If required, the GST registration no. can be edited after the values are retrieved for formatting purpose. 
![NZBN Edit.png](.img/NZBN%20Edit-fa9c9e81-794b-4480-be00-2ca1546b6655.png)

> Note: GST Registration No. are not always defined or public on NZBN registrations.

## Address lookup

Once an NZBN is set:

1. To Look up an Address click on the __NZBN Addresses__ option from Customer Action Bar. This opens a list of all addresses associated with the NZBN number selected. _Type_ column specifies the address type from the database, click "OK" to select. 
1. These retrieved values can be over-written if required. 
![image.png](.img/image-b05c2dac-7884-409d-93ef-3735cb2a719a.png)

> Note: Addresses may not always be defined on NZBN registrations. 

## Permission requirement
      
Editing rights to tables Customer, Vendor and Company Information are required to update the information using NZBN functionalities as well as execution of the Codeunits to retrieve the information from the registry.
       
Below permission sets are installed with this extension:
*   F5LICENSINGUSE: Required for all users using any of the functionalities for the NZBN extension in Production. License key will be assigned by Fusion5 personnel to your Company environment upon activation of the extension.
*   FS5N07 NZBN: Contains permission set to edit company information, Customer, Vendor Card and execution of codeunit to retrieve the information from NZBN.