class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first
      t.string :last
      t.integer :age

      t.timestamps null: false
    end
  end
end
