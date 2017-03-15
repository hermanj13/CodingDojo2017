require_relative 'apple_tree'
RSpec.describe AppleTree do
  before(:each) do
    @tree1 = AppleTree.new(0,10)
    @tree2 = AppleTree.new(3,10)
    @tree3 = AppleTree.new(11,10)
  end
  describe 'has proper access methods' do
    it 'getters and setters for age attribute' do
      expect(@tree1.age).to eq(0)
    end
    it 'getter method only for height attribute' do
      expect{@tree1.height = 10}.to raise_error(NoMethodError)
      expect(@tree1.height).to eq(10)
    end
    it 'getter method only for apple attribute' do
      expect{@tree1.appleCount = 10}.to raise_error(NoMethodError)
      expect(@tree1.appleCount).to eq(0)
    end
  end
  describe 'check method functions' do
    before(:each) do
      @tree1.year_gone_bye
      @tree2.year_gone_bye
      @tree3.year_gone_bye
    end
    context "year_gone_bye method" do
      it 'add one year to age' do
        expect(@tree1.age).to eq(1)
        expect(@tree2.age).to eq(4)
        expect(@tree3.age).to eq(12)
      end
      it 'increase the height by 10%' do
        expect(@tree1.height).to eq(11)
        expect(@tree2.height).to eq(11)
        expect(@tree3.height).to eq(11)
      end
      it 'increase apple count by 2' do
        expect(@tree1.appleCount).to eq(0)
        expect(@tree2.appleCount).to eq(2)
        expect(@tree3.appleCount).to eq(0)
      end
    end
    context 'pick_apple method' do
      before(:each) do
        @tree1.pick_apples
        @tree2.pick_apples
      end
      it 'all apples removed from tree' do
        expect(@tree1.appleCount).to eq(0)
        expect(@tree2.appleCount).to eq(0)
      end
    end
  end
end
