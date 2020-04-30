# Intro to SQL 🛢

## What is SQL?

SQL stands for Structured Query Language and is a language that allows us to talk to databases in order to:

- Store / persist information
- Manipulate that information
- We can perform CRUD actions: Create, Read, Update, Delete

## Creating Databases & Tables From the Command Line With Sqlite3

1. Create a new db `sqlite3 pets.db`
2. Create table in the terminal

```sql
CREATE TABLE dogs (id INTEGER PRIMARY KEY, name TEXT, age INTEGER);
```

3. Or Create a .sql file

```sql
CREATE TABLE cats (id INTEGER PRIMARY KEY, name TEXT, age INTEGER);
```

4. And execute `sqlite3 pets.db < 01_create_dogs_table.sql`

## Creating tables in Sqlite Browser

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `music.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges 🦾

1. Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name == "Black Sabbath";
-- or
SELECT * FROM artists WHERE name LIKE "%Black%";
```

3. Write the SQL to create a table named 'fans' with an auto-incrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (id INTEGER PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have an artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas?

```sql
INSERT INTO fans (name, artist_id) VALUES ("Amelie", 169);
```

6. Write the SQL to return fans that are not fans of the black eyed peas

```sql
SELECT *  FROM fans WHERE artist_id != 169
```

## Questions

```Ruby

# Table row is not saving an actual instance in the tables.

#tables will always be plural
#classes will always be singular
#artists -> class Artist
class Artist
  attr_accessor :name, :id
  (#id and name) -> columns
  @@all = [ ]
  def initiliaze(name, id=nil)
    @name = name
    @id = id
    @@all << self
  end

  def self.all
    @@all 
  end 
end 

# table rows -> Ruby instances
```