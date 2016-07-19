class CreateMainProducts < ActiveRecord::Migration
  def change
    create_table :main_products do |t|
      t.string :title
      t.text :description

      t.timestamps null: false
    end
  end
end
