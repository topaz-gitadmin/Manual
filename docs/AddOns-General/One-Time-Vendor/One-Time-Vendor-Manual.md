<h1> One-Time Vendors for Business Central </h1>

# Overview

Create a One-Time Vendors for use in one-off purchases to avoid setting up Vendors that are only used once.

# Setup

Once the Topaz One-Time Vendor has been installed a notification will suggest creating a One-Time Vendor if none exists when opening a Purchase Order/Invoice.

*missing pic*

Alternatively A One-Time Vendor can be created by setting the One-Time Vendor Flag on a new Vendor.

![Setup a Topaz One-Time Vendor](img/setup.02-21ae5571-597f-4b2f-a13f-ecabc6bebc4b.PNG)

## Installation

after the install existing Purchase Orders/Invoice will need to update the "One-Time Vendor Name" with the "Buy-from Vendor Name" using a configuration package.

# Using a One-Time Vendor

The One-Time Vendor can be selected like a normal Vendor, but you will need to enter a Name and Address details on the Purchase Document.

![Use a Topaz One-Time Vendor](img/use.01-2d1b0a91-570b-42e0-8296-a6ec0e057069.PNG)

Details from the actual Vendor Card will not be used.

![Use a Topaz One-Time Vendor](img/use.02-78a3dace-c845-4c80-9f91-80654948fec5.PNG)
As required additional banking Details can be entered via the "One-Time Vendor Banking Details" section.

![Bank Details for Topaz One-Time Vendor](img/use.03-40976697-43d2-4555-ba17-bbdfb389d6f7.PNG)

Alternatively you can edit this from a notification on the Purchase Order/Invoice.

![Bank Details for Topaz One-Time Vendor](img/use.04-d9685247-8f94-4da4-ab6e-cedaf79c4899.PNG)  

an additional Page will be opened

![Bank Details for Topaz One-Time Vendor](img/use.05-9bb1ba45-cb7b-4a5f-b2bb-5a57b1a21603.PNG)

## Use with EFT

To use this with EFT the Topaz Direct Credit extension is required as well as the integration extension handling the retrieval of One-Time Vendor details for the Direct Credit extension "Topaz OTV-EFT"