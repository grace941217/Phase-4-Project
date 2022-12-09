Book.destroy_all
20.times do
    Book.create(title: Faker::Book.title, author: Faker::Book.author, year: rand(1980..2022), genre: Faker::Book.genre,   description: Faker::Quotes::Shakespeare.as_you_like_it_quote
    )
end

User.destroy_all
5.times do
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Name.middle_name, password: '1234')
end

Review.destroy_all
60.times do
    Review.create(rating: rand(1..5), book_review: Faker::Quote.famous_last_words, book_id: rand(1..60), user_id: rand(1..5))
end