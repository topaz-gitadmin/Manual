# Copy Master Company for Business Central

## Overview

Synchronize master data tables from a master company to other companies within the same environment.

## Setup

The Master Company is flagged as such in the __Company Information__ (Copy Comp. Config. Master) with a “Sync. Delay” to allow some room for undo etc.
Companies to be updated are flagged as well (Update from Copy Comp. Config. Master).
![Setup Company Information](img/setup.01-c6da6db8-e231-4183-a19c-57aa50c0039f.PNG)

A IC Config is defined for Active Tables and a set of Fields with validation flags and a validation order.
A Filter on Record fields can be defined for this as well for example only copy Dimension Values for the BUSINESAREA Dimension.
![Setup Copy Company](img/setup.02-55c991bf-ce57-4f79-bb79-acc4be6b14ec.PNG)

You can unsubscribe specific Master tables at a Child company.

For copied fields default replacement vales can be defined

## Processing Flow

If a new Record is Inserted, Modified or Deleted a Copy Company Action is created.
![Copy Company Actions](img/actions.01-92e0c324-84f1-4741-b329-0f1f26159d4c.PNG)

The Copy Company Action is then picked up by a Job Queue running in the companies to be updated that create the Record requested.
It flags the transactions as processed once they are successfully processed or reports the validation error if appropriate.
Once the cause of the validation is fixed, the record processes next time the job runs or you can delete the record from the processing table if you don’t want it to process.
![Copy Company Job Queue](img/jobqueue.01-3026aa13-f268-4127-8283-0e984b90c317.PNG)

All processed Actions are stored in a Log Table.

> __Note:__ You can activate Notifications about Copy Company issues in "My Notifications"

> __Note:__ Renames in copied tables in the Master Company are prevented.
