# frozen_string_literal: true

require 'rspec'

# Solution
module AttrLazy
  def attr_lazy(name, &block)
    var_name = "@#{name.to_s.gsub(/(?:^@|\?)/, '')}"
    define_method(name) do
      if instance_variable_defined?(var_name)
        instance_variable_get(var_name)
      else
        instance_variable_set(var_name, instance_eval(&block))
      end
    end
  end
end

# Sample Test
class Numbers
  extend AttrLazy

  def initialize(*numbers)
    @numbers = numbers
  end

  attr_lazy :evens do
    @numbers.select(&:even?)
  end

  attr_lazy :even? do
    @numbers.all?(&:even?)
  end

  def mark_even
    @even = true
  end
end

describe 'AttrLazy' do
  it 'should return the value provided by the block' do
    example = Numbers.new(1, 2)

    expect(example.evens).to eq([2])
    expect(example.even?).to eq(false)
  end

  it 'should not call the block if the variable is set manually' do
    example = Numbers.new(1)
    example.mark_even

    expect(example.even?).to eq(true)
  end
end
