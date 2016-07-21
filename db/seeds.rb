# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user = User.create([

{username:"nanthandarhtwe",email: "nanthandarhtwe@gmail.com", password: "privatenth", password_confirmation: "privatenth"},

])




aboutus = Aboutu.create([

{about: "Our <span style='font-weight:bold;'>LUCKY BAG & SWALLOW PLASTIC TRADING COMPANY LIMITED</span> was founded in 1992 and located in 8 acres wide land with over 1000 well-trained employees. Our company become an ISO 9001:2008 achieved company in the beginning of 2016.<br/>
           				  With the strong relationship with the local distributors and oversea raw material suppliers, we are producing and distributing nearly 1000MT/month of HDPE, LDPE, LLDPE, PP bags all over Myanmar with the two different brand names 'LUCKY BAG' and 'SWALLOW'.
           				  <br/>
			            Starting from 2012, we started to export our products to Japan & EU and now the capacity has reach to nearly 100MT/month.<br/>
						We are ready to supply your need providing the best services with over 24 years of experience."},

])



customer = Customer.create([

	{:title => "KBZ BANK", :description => ""},
    {:title => "AYA BANK", :description => ""},
	{:title => "GTB BANK", :description => ""}

	])


product = Product.create([

{:title => "(1) LUCKY BAG T-SHIRT BAGS (HDPE/LDPE)", description:"This is for multi-purposed usage.Available sizes : 5x9, 6x11, 6x14, 7x15, 8x15, 9x18, 12x20, 12x24, 16x35 inches."},

{:title => "(2) SWALLOW T SHIRT BAG", description:"This is for multi-purposed usage.Available sizes : 5x9, 6x11, 6x14, 7x15, 8x15, 9x18, 12x20, 14x28 inches."},

{:title => "(3) LUCKY BAG GARBAGE", description:"LUCKY BAG Garbage bags are distributing to all over Myanmar.We add in the plastic rope for the convenience in usage.
   Available sizes : 16x32, 12x25 inches
   Colors : Blue, Green"},

{:title => "(4) LUCKY BAG DISPOSIBLE GLOVES (HDPE)", description:"This LUCKY BAG DISPOSIBLE GLOVES are also distributing to a lot of areas in Myanmar.
     Mainly used for hygienic purpose in food shops and also for multi-purposed usage.
    Size : Come in only one free-size and packed 50pcs/pack."},

{:title => "(5) LUCKY BAG PLASTIC ROPE ( HDPE)", description:"This LUCKY BAG PLASTIC ROPE is our new product.
      Available in many colors and various weights for your choice."},

{:title => "(6) PLANTATION BAGS (HDPE/LDPE)", description:" These kind of bags are used in growing the young plants.
     Comes in two styles : with punched holes and withoud punched holes."},

{:title => "(7) Poly Bags, Garment bags ( LDPE, OPP, CPP, PP)", description:"We supply these bags to the garment factory in Myanmar.
 Poly bags with tape and Poly bags with hanger holes.
Printed and non-printed.
Sizes are according to customer’s need."},


{:title => "(8) PP bags", description:"PP bags are chosen by customers who require transparency for displaying their products inside.
Used for packaging of various products.
Two types available in side-sealed and bottom-sealed.
Sizes are according to the requirement."},


{:title => "(9) Wicket bags (LDPE)", description:"These bags are used mainly for auto fast packing of breads and various products."},

{:title => "(10)  Heat-Shrinkable Film (LLDPE)", description:"These Heat-Shrinkable films are used for packaging the PET bottles.
    We supply in both Roll type and Cut & Sealed type."},


{:title => "(11) Stretch Film/ Wrapping film", description:"These films are used pallet wrapping and food wrapping.
We supply in Machine-wrap type and Hand-wrap type."},


{:title => "(12) MULTIPURPOSE ROLLS ( HDPE/LDPE)", description:"We also produce big plastic sheet rolls of both HDPE and LDPE.
 Uses are in covering things and used as roof in agricultural and  shelters."},


 {:title => "(13)  TEAR-OFF BAGS ON ROLLS (HDPE/LDPE)", description:"We also produces bags on rolls of various sizes.
(1) Flat bags on rolls.
(2) T-shirt bags on rolls.
(3) Garbage bags on rolls"},


  {:title => "(14) JUMBO BAGS/ BAGS LINERS (HDPE/LDPE)", description:"    We also supplies Jumbo bags and bag liners of various sizes.
"},


])

