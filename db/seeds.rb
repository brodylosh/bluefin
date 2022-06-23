Buyer.destroy_all
House.destroy_all
Agent.destroy_all
Listing.destroy_all

#Buyers

buyer1 = Buyer.create( first_name: 'SpongeBob', last_name: 'SquarePants', age: 32, img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png', budget: 200000, preapproved: true, username: 'square1', password:'SecretFormula')
buyer2 = Buyer.create( first_name: 'Patrick', last_name: 'Star', age: 26, img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png', budget: 75000, preapproved: true, username: 'notRick', password:'123')
buyer3 = Buyer.create( first_name: 'Squidward', last_name: 'Tentacles', age: 41, img_url: 'hhttps://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png', budget: 225000, preapproved: true, username: 'squiddy01', password:'houseFancy')
buyer4 = Buyer.create( first_name: 'Sheldon', last_name: 'Plankton', age: 103, img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Plankton_and_Karen.svg/1200px-Plankton_and_Karen.svg.png', budget: 1000000, preapproved: false, username: 'Plank10', password:'k@ren')
buyer5 = Buyer.create( first_name: 'Arnold', last_name: 'Shortman', age: 18, img_url: 'https://static.wikia.nocookie.net/nickelodeon/images/6/67/Arnold_Shortman-2018.png/revision/latest?cb=20181225170445', budget: 1500000, preapproved: true, username: 'arnie', password:'shorty01')
buyer6 = Buyer.create( first_name: 'Helga', last_name: 'Pataki', age: 18, img_url: 'https://static.wikia.nocookie.net/heyarnold/images/f/f2/Tumblr_oqrtdqxfH91tr6wqbo1_1280.png/revision/latest?cb=20191027160853', budget: 175000, preapproved: false, username: 'helgaP', password:'Pataki98')
buyer7 = Buyer.create( first_name: 'Cat', last_name: 'Dog', age: 18, img_url: 'https://static.wikia.nocookie.net/viacom4633/images/5/50/CatDog.png/revision/latest?cb=20200321021516', budget: 220000, preapproved: true, username: 'CatDog', password:'dogsRule')
buyer8 = Buyer.create( first_name: 'Nigel', last_name: 'Thornberry', age: 18, img_url: 'https://static.wikia.nocookie.net/wildthornberrys/images/c/c2/NIGEL_%282%29.png/revision/latest?cb=20180824131248', budget: 60000, preapproved: true, username: 'nigelT', password:'smashing24')

#Agents

agent1 = Agent.create(first_name: 'Mrs.', last_name: 'Puff', img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1200px-Mrs._Puff.svg.png', license_number: 256782, brokerage: 'Puff Puff..Realty')
agent2 = Agent.create(first_name: 'Sandy', last_name: 'Cheeks', img_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png', license_number: 259885, brokerage: 'Cheeks Domes and Homes')
agent3 = Agent.create(first_name: 'Gerald', last_name: 'Johanssen', img_url: 'https://static.wikia.nocookie.net/heyarnold/images/a/aa/Gerald_TJM.png/revision/latest?cb=20171109070206', license_number: 253101, brokerage: 'GJo Realty')
agent4 = Agent.create(first_name: 'Tommy', last_name: 'Pickles', img_url: 'https://static.wikia.nocookie.net/nickelodeon/images/8/8c/Tommy_Pickles_in_Newer_Years.png/revision/latest?cb=20190607225227', license_number: 256999, brokerage: 'Pickles Places')
agent5 = Agent.create(first_name: 'Doug', last_name: 'Funnie', img_url: 'https://static.wikia.nocookie.net/doug/images/a/a5/Doug_Funnie2.png/revision/latest?cb=20180531191407', license_number: 250908, brokerage: 'Hilarious Homes')
agent6 = Agent.create(first_name: 'Rocko', last_name: 'Rama', img_url: 'https://static.wikia.nocookie.net/nickelodeon/images/4/4d/Rocko_Rama_in_Static_Cling.png/revision/latest?cb=20190829003314', license_number: 252743, brokerage: 'Modern Homes')

#Houses

house1 = House.create(img_url: 'https://static.wikia.nocookie.net/spongefan/images/e/e1/SpongeBob_house.jpg/revision/latest/scale-to-width-down/640?cb=20180210163257', address: '124 Conch St.', beds: 2, baths: 2, square_feet: 1250, price: 190000, agent_id: 1)
house2 = House.create(img_url: 'https://cdn.spongebobwiki.org/thumb/3/32/Squidward%27s_house_Scavenger_Pants.png/1200px-Squidward%27s_house_Scavenger_Pants.png', address: '122 Conch St.', beds: 3, baths: 2, square_feet: 1600, price: 225000, agent_id: 2)
house3 = House.create(img_url: 'https://static.wikia.nocookie.net/spongebob/images/3/3b/Fun-Sized_Friends_081.png/revision/latest?cb=20180215230735', address: '120 Conch St.', beds: 0, baths: 0, square_feet: 200, price: 55000, agent_id: 3)
house4 = House.create(img_url: 'https://static.wikia.nocookie.net/spongebob/images/7/74/Feral_Friends_203.png/revision/latest?cb=20171008095158', address: '3211 Lonestar St.', beds: 1, baths: 1, square_feet: 3000, price: 130000, agent_id: 4)
house5 = House.create(img_url: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1679,w_3000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/HA_1001_03_BG_BoardingHouseExtAcrossTheStreetA_color_x9fd0p.jpg', address: '123 Main St.', beds: 9, baths: 3, square_feet: 4200, price: 1200000, agent_id: 1)
house6 = House.create(img_url: 'https://static.wikia.nocookie.net/catdog/images/7/7c/CatDog%27s_House.jpg/revision/latest/scale-to-width-down/1200?cb=20220522055604', address: '123 Main St.', beds: 9, baths: 3, square_feet: 4200, price: 1200000, agent_id: 1)
house7 = House.create(img_url: 'https://static.wikia.nocookie.net/nickelodeon/images/5/59/ConVee.jpg/revision/latest?cb=20180908015439', address: 'Mobile', beds: 2, baths: 1, square_feet: 100, price: 38000, agent_id: 1)
house8 = House.create(img_url: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_19/1434996/full-house-home-today-main-190508.jpg', address: '1234 Main St.', beds: 5, baths: 3, square_feet: 3200, price: 750000, agent_id: 1)

#Listings

listing1 = Listing.create(buyer_id: 2, house_id:1)
listing2 = Listing.create(buyer_id: 5, house_id:2)
listing3 = Listing.create(buyer_id: 3, house_id:3)
listing4 = Listing.create(buyer_id: 7, house_id:4)
listing5 = Listing.create(buyer_id: 6, house_id:5)
listing6 = Listing.create(buyer_id: 8, house_id:6)
listing7 = Listing.create(buyer_id: 1, house_id:7)
listing8 = Listing.create(buyer_id: 4, house_id:8)