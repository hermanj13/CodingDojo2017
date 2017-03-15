require "spec_helper"

RSpec.describe Stringer do
  it "concatenates undefined number of strings with a space" do
      expect(Stringer.spacify "Oscar", "Vazquez", "Zweig", "Olasaba", "Hernandez", "Ricardo", "Mendoza").to eq("Oscar Vazquez Zweig Olasaba Hernandez Ricardo Mendoza")
  end
  it "if a string is longer then given value shorten to that given value" do
    expect(Stringer.minify("Hello, I'm learning how to create a gem", 10)).to eq("Hello, I'm...")
    expect(Stringer.minify("Hello", 10)).to eq("Hello")
  end
  it "alters a string replacing one string value with another" do
    expect(Stringer.replacify("I can't do this", "can't", "can")).to eq("I can do this")
  end
  it "takes a string and splits each work into an array" do
    expect(Stringer.tokenize("I love to code")).to eq(["I", "love", "to", "code"])
  end
  it "remove specific portion of a given string" do
    expect(Stringer.removify("I'm not a developer", "not")).to eq("I'm a developer")
  end
end
