class BankAccount
  @@numberOfAccounts =0
  def initialize
    @accountNumber = generateAccount
    @checking = 0
    @savings = 0
    @interest_rate = 0.01
    @@numberOfAccounts += 1
  end
  def accountNumber
    puts @accountNumber
    self
  end
  def checkingBalance
    puts @checking
    self
  end
  def savingsBalance
    puts @savings
    self
  end
  def deposit(account,amount)
    if account == "checking"
      @checking += amount
      self
    elsif account == "savings"
      @savings += amount
      self
    else
      puts "Wrong account type"
    end
  end
  def withdraw(account,amount)
    if account == "checking"
      if @checking >= amount
        @checking -= amount
        puts "Withdrew #{amount}, new checking total is #{@checking}"
        self
      else
        puts "Insufficient Funds, current checking total is #{@checking}"
        self
      end
    elsif account == "savings"
      if @savings >= amount
        @savings -= amount
        puts "Withdrew #{amount}, new savings total is #{@savings}"
        self
      else
        puts "Insufficient Funds, current savings total is #{@savings}"
        self
      end
    else
      puts "Wrong account type"
    end
  end
  def total
    puts @savings + @checking
    self
  end
  def account_information
    puts "Your accounts number is #{@accountNumber}"
    puts "Your total money is #{@savings + @checking}"
    puts "Your checking balance is #{@checking}"
    puts "Your savings balance is #{@savings}"
    puts "Your interest rate is #{@interest_rate}"
    puts "There is #{@@numberOfAccounts} at this bank"
    self
  end
  private
    def generateAccount
      save = rand(1..5000)
    end
end

jake = BankAccount.new
jake.deposit('checking',300)
jake.deposit('savings',500)
jake.withdraw('checking',250).withdraw('savings',200)
jake.account_information
