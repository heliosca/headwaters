# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do 

	Product.create(
		{ product_type: 'flower',
			name: Faker::BossaNova.song,
			thc: Faker::Number.decimal(2, 3),
			cbd: Faker::Number.decimal(2, 3),
			strain: Faker::Coffee.blend_name,
			description: Faker::Hipster.sentences(3),
		 } 
	)

end

10.times do 

	Product.create(
		{ product_type: 'vape',
			name: Faker::BossaNova.song,
			thc: Faker::Number.decimal(2, 3),
			cbd: Faker::Number.decimal(2, 3),
			strain: Faker::Coffee.blend_name,
			description: Faker::Hipster.sentences(3),
		 }
	)

end
