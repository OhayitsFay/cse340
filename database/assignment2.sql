-- Insert Tony Stark's record
INSERT INTO public.account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

--Modify Tony Stark's accoun type to Admin
UPDATE public.account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';

-- Delete Tony Stark's record:
DELETE FROM public.account
WHERE account_email = 'tony@starkent.com';

--Update GM Hummer record 
UPDATE public.inventory
SET inv_description = REPLACE (inv_description, 'small interiors', 'a huge interior')
WHERE inv_model = 'GM Hummer';

--Use an inner join to retrieve make, model, and classification for Sport category:
SELECT inventory.inv_make, inventory.inv_model, classification.classification_name
FROM public.inventory
INNER JOIN public.classification ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name ='Sport';

--Update inv_image and inv_thumbnail paths in the inventory table
UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');

