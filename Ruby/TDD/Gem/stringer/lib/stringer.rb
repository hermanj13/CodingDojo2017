require "stringer/version"

module Stringer
  def self.spacify *strings
    strings.join(' ')
  end
  def self.minify string,length
    if string.length > length
      string = string[0...length]
      string += "..."
    end
    string
  end
  def self.replacify string,replaced,replacer
    string.gsub!(replaced,replacer)
  end
  def self.tokenize string
    string.split(" ")
  end
  def self.removify string,remover
    string.gsub!(" " + remover, "")
  end
end
