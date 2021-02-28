# frozen_string_literal: true

require 'minitest/autorun'

# Solution
def permutations(string)
  string.chars.permutation.map(&:join).uniq
end

# Sample Test
describe 'Basic Tests' do
  it 'should test for basic tests' do
    assert_equal(permutations('ab').sort, %w[ab ba])
    assert_equal(permutations('aabb').sort, %w[aabb abab abba baab baba bbaa])
  end
end
