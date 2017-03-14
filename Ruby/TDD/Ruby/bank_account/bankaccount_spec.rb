require_relative 'bankaccount'
RSpec.describe BankAccount do
  before(:each) do
    @account1 = BankAccount.new
    @account2 = BankAccount.new
    @account1.deposit('saving',500)
    @account2.deposit('checking',500)
  end
  it 'has a getter for checking attribute' do
    expect(@account1.checking).to be >= 0
  end
  it 'has a getter to retrieve total account balance' do
    expect(@account1.total).to eq("Checking Balance: 0\nSaving Balance: 500\nTotal Balance: 500")
  end
  describe 'withdrawal functions' do
    it 'has a withdrawal function' do
      expect(@account1.withdrawal('saving',200)).to eq(300)
      expect(@account2.withdrawal('checking',200)).to eq(300)
    end
    it 'has not enough money in the account to withdrawal' do
      expect{@account1.withdrawal('checking',10000)}.to raise_error(RuntimeError)
      expect{@account2.withdrawal('saving',10000)}.to raise_error(RuntimeError)
    end
  end
  describe 'unacessable variables' do
    it 'attempts to retrieve the total number of bank accounts' do
      expect{@acount1.bank_accounts}.to raise_error(NoMethodError)
    end
    it 'attempts to access interest rate' do
      expect{@account1.interest_rate}.to raise_error(NoMethodError)
    end
  end
end
