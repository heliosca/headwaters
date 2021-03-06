# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Farm.create([
	{ name: "empress farms", location: "humboldt county", state: "california", website: "https://empressfarms.com" },
	{ name: "solimar ranch", location: "humboldt county", state: "california" }
])

Product.create([
	{ 
		product_type: 'flower', 
		name: "GDP", 
		strain: "gdp", 
		weed_type: "indica", 
		description: "Grandaddy Purple (or GDP) is one of the most acclaimed indicas on the west coast.  This California legend is known for its purple undertones and its unforgettable grape/berry smell.  Grown at the beautiful Empress Farms on the Lost Coast in Humboldt County, this strand of GDP was nurtured by fresh Pacific Ocean air - giving it a unique taste, smell, and touch,  unlike any other.", 
		thc: Faker::Number.decimal(2, 3), 
		cbd: Faker::Number.decimal(2, 3), 
		benefits: "relieves pain & replenishes appetite",
		flavor: "grape/berry"
	},
	{ 
		product_type: 'flower',
		name: "Zkittlez",
		strain: "zkittlez",
		weed_type: "indica",
		description: "Although it's not the rainbow colored treat you've been eating for years, Zkittlez is an indica-dominant strain that got its name from its unique candy taste.  Zkittlez's fruit-forward flavor profile is sure to impress the kid within us all, enabling its users to truly taste the rainbow.  Grown at Solimar Ranch in the Mattole River Valley along the Lost Coast, this strain was cultivated by the Headwaters family using our sustainable, eco-efficient techniques.",
		thc: Faker::Number.decimal(2, 3),
		cbd: Faker::Number.decimal(2, 3),
		benefits: "relaxes the body & reduces stress",
		flavor: "fruity"
	},
	{ 
		product_type: 'flower',
		name: "Kandy Kush",
		strain: "kandy kush",
		weed_type: "hybrid",
		description: "Kandy Kush is a hybrid of two California classics, OG Kush and Trainwreck.  This wildly popular, indica dominant strain has a very full citrus/sweet taste and is known for its prominent ability to help treat pain.  Grown at Solimar Ranch in the Mattole River Valley along the Lost Coast, this strain was cultivated by the Headwaters family using our sustainable, eco-efficient techniques.", 
		thc: Faker::Number.decimal(2, 3), 
		cbd: Faker::Number.decimal(2, 3), 
		benefits: "relieves pain & helps insomnia",
		flavor: "sweet citrus"
	},
	{ 
		product_type: 'flower',
		name: "Rose OG", 
		strain: "rose og", 
		weed_type: "hybrid", 
		description: "Rose OG is a hybrid that is transcendent of the masterful OG Kush.  With a dominant floral fragrance, this strain is best known for its rose-like and pine scented nuances and provides its users with an elevated calm euphoria.  Grown at Solimar Ranch in the Mattole River Valley along the Lost Coast, this strain was cultivated by the Headwaters family using our sustainable, eco-efficient techniques.", 
		thc: Faker::Number.decimal(2, 3), 
		cbd: Faker::Number.decimal(2, 3), 
		benefits: "calms muscle spasms & reduces stress",
		flavor: "sweet & floral"
	},
	{ product_type: 'flower',
		name: "Trainwreck",
		strain: "trainwreck",
		weed_type: "sativa",
		description: "Trainwreck is a potent sativa that has become one of Northern California's premier strains.  With aromatic hints of lemon and pine, Trainwreck has a wide range of benefits from help with anxiety to relief of certain ADHD symptoms.  Grown at Solimar Ranch in the Mattole River Valley along the Lost Coast, this strain was cultivated by the Headwaters family using our sustainable, eco-efficient techniques.",
    thc: Faker::Number.decimal(2, 3), 
    cbd: Faker::Number.decimal(2, 3), 
    benefits: "helps with anxiety & depression",
    flavor: "earthy cherry"
  },
	{ 
		product_type: 'flower',
		name: "Tangie",
		strain: "tangie",
		weed_type: "sativa",
		description: "With original roots tracing back to Amsterdam, Tangie is a familiar sativa with many popular variations.  Tangie not only provides its users with an energetic boost, but it delivers on the strong citrus and tangerine taste that its name suggests.  Grown at Solimar Ranch, in the Mattole River Valley along the Lost Coast, this strain was cultivated by the Headwaters family using our sustainable, eco-efficient techniques.",
		thc: Faker::Number.decimal(2, 3),
		cbd: Faker::Number.decimal(2, 3),
		benefits: "fights fatigue & reduces stress",
		flavor: "sweet orange"
	},
	{ 
		product_type: 'vape',
		name: "Nighttime",
		weed_type: "indica",
		description: "The Nighttime pen is the perfect way to take the edge off after a long day. It’ll help soothe sore muscles, combat stress and kick off a great night of sleep.",
		thc: Faker::Number.decimal(2, 3),
		cbd: Faker::Number.decimal(2, 3),
		benefits: "relaxes mind and muscles for a great night of sleep"
	},
	{ 
		product_type: 'vape',
		name: "Daytime",
		weed_type: "sativa",
		description: "Our daytime pen boosts energy and helps maintain clarity and focus throughout the course of the day.",
		thc: Faker::Number.decimal(2, 3),
		cbd: Faker::Number.decimal(2, 3),
		benefits: "boosts energy and helps focus"
	},
	{ 
		product_type: 'vape',
		name: "Anytime",
		weed_type: "hybrid",
		description: "Appropriate for daytime and nighttime alike, our Anytime pen is great for people that struggle with persistent anxiety and stress.",
		thc: Faker::Number.decimal(2, 3),
		cbd: Faker::Number.decimal(2, 3),
		benefits: "keeps you calm and helps with stress"
	},
	{ 
		product_type: 'vape',
		name: "Timeless",
		weed_type: "hybrid",
		description: "Let time slip away! Appropriate for the active, daily consumer, our Timeless 80% THC cartridge provides a strong-hitting full body high!",
		thc: Faker::Number.decimal(2, 3),
		cbd: Faker::Number.decimal(2, 3),
		benefits: "provides robust euphoria and relieves pain"
	}
])


empress = Farm.where(name: "empress farms").first
soli = Farm.where(name: "solimar ranch").first

gdp = Product.where(strain: "gdp")
empress.products << gdp

zkittlez = Product.where(strain: "zkittlez")
soli.products << zkittlez

kandy_kush = Product.where(strain: "kandy kush")
soli.products << kandy_kush

rose = Product.where(strain: "rose og")
soli.products << rose

trainwreck = Product.where(strain: "trainwreck")
soli.products << trainwreck

tangie = Product.where(strain: "tangie")
soli.products << tangie

nighttime = Product.where(name: "Nighttime")
soli.products << nighttime

daytime = Product.where(name: "Daytime")
soli.products << daytime

anytime = Product.where(name: "Anytime")
soli.products << anytime

eighty = Product.where(name: "Timeless")
soli.products << eighty

