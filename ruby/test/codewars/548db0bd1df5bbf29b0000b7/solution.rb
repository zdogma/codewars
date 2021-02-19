# frozen_string_literal: true

require 'rspec'

# Solution
valid_dates = {
  1 => 31,
  2 => 28,
  3 => 31,
  4 => 30,
  5 => 31,
  6 => 30,
  7 => 31,
  8 => 31,
  9 => 30,
  10 => 31,
  11 => 30,
  12 => 31
}.flat_map { |m, d| [*1..d].map { |date| [m, date] } }
 .map { |m, d| "#{format('%02<num>d', num: m)}-#{format('%02<num>d', num: d)}" }
 .join('|')

valid_date = Regexp.new("\\[(?:#{valid_dates})\\]")

# Sample Test
describe 'Basic tests' do
  it { expect(valid_date =~ '[01-23]').to be >= 0 }
  it { expect((valid_date =~ '[02-31]').nil?).to eq true }
  it { expect(valid_date =~ '[02-16]').to be >= 0 }
  it { expect((valid_date =~ '[ 6-03]').nil?).to eq true }
  it { expect(valid_date =~ 'ignored [08-11] ignored').to be >= 0 }
  it { expect(valid_date =~ '[3] [12-04] [09-tenth]').to be >= 0 }
  it { expect((valid_date =~ '[02-00]').nil?).to eq true }
  it { expect(valid_date =~ '[[[08-29]]]').to be >= 0 }
  it { expect((valid_date =~ '[13-02]').nil?).to eq true }
  it { expect(valid_date =~ '[02-[08-11]04]').to be >= 0 }
end
