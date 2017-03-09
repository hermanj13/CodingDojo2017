def guess_number guess
    number = 25
    puts "to high" if number < guess
    puts "you got it" if number == guess
    puts "to low" if number > guess
end
guess_number 35
guess_number 25
guess_number 15
