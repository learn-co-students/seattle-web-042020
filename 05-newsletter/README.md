# Ruby Basics Assessment - Newsletter

This assessment is designed to test your understanding of the basics of Ruby. It covers:

- Ruby Syntax Basics
- Problem Solving and Debugging in Ruby
- Ruby Arrays, Hashes, and Enumerable methods

Read these instructions carefully. They describe the code you'll be working with and what you need to do.

At the bottom of this file is the rubric used to evaluate your submission. You do not need to get everything right. Focus on getting each piece of code to work instead of writing partial solutions for each task.

## Introduction

The program you are working with is a command line tool to help generate newsletters. The code isn't working right now - there are errors in the existing code, and there's some functionality that is missing. Your job is to fix the errors and add the functionality so that the newsletters are generated correctly.

Make edits to `newsletter.rb`. As you do, you can run the code with `ruby newsletter.rb` to check the output. `sample_output.txt` shows the output that you will see if you complete all of the tasks below.

## Instructions

These should be completed in order - each step builds on the previous steps. See below for a more detailed explanation of each step.

1. Fix the errors in `newsletter.rb` so that it runs without errors
2. Fix the `format_campus_location` method so that it has the correct output
3. Write the `calculate_recipients` method to return only the recipients that haven't unsubscribed
4. Write the `print_recipients` method to print a string with a list of the correct recipients
5. Write the body of `print_one_article` to print a string with the formatted article
6. Write the `print_many_articles` method to print all the articles
7. Run your code with `ruby newsletter.rb` and verify that it matches the sample output in `sample_output.txt`

Feel free to use any debugging tools you've learned in order to solve the challenge. Remember, you may need to add additional code to `newsletter.rb` in order to use tools like `binding.pry`.

If you get stuck, you are allowed to skip tasks. You can submit without completing all the instructions. You don't need to complete all of the tasks in order to get meaningful feedback on your code.

### 1. Fix errors in `newsletter.rb` so that it runs without errors

If you run `ruby newsletter.rb`, you'll notice that the code exits with an error. Before you try the next tasks, get the code to run without errors.

As you solve the rest of the tasks, make sure that you can continue to run `ruby newsletter.rb` without errors.

### 2. Fix the `format_campus_location` method so that it has the correct output

When you run `ruby newsletter.rb`, the subject line shows

```txt
SUBJECT: Flatiron  Newsletter - Nov 20, 2019
```

If you check `sample_output.txt`, it shows that the right output should be

```txt
SUBJECT: Flatiron DC Newsletter - Nov 20, 2019
```

`format_campus_location` should return `"Flatiron DC"`. Figure out why it is not working correctly, and fix it. You'll know it's working when the subject line in the output shows correctly.

### 3. Write the `calculate_recipients` method to return only the recipients that haven't unsubscribed

When people subscribe to the newsletter, they are added to `SUBSCRIBED`. When people unsubscribe from the newsletter, they are added to `UNSUBSCRIBED`. We need to avoid sending the newsletter to anyone who has unsubscribed. `calculate_recipients` should return an array. None of the emails in the `UNSUBSCRIBED` array should appear in the results array returned.

You can check if your version is working by looking at the output -`cedricschmidt@robel.io` should be gone from the beginning, and the last recipient should be `bryant@cummingsfisher.biz`. You may need to use debugging tools to check the output, since this method should not print anything.

Your `calculate_recipients` method should return a new array - it should not change the `SUBSCRIBERS` array.

### 4. Write the `print_recipients` method to print a string with a list of the correct recipients

We want our "RECIPIENTS: " line to include a list of the email addresses of the newsletter's recipients, separated by commas. Use the `calculate_recipients` method to get the correct email addresses, then print and format them in this method.

At this point, you can check your output for the "RECIPIENTS: " line against the `sample_output.txt` file.

### 5. Write the body of `print_one_article` to print a string with the formatted article

Each article has an author, title, and text. Fill in the `print_one_article` method to print the article as a formatted string. It should look like

```txt
Mining
by: Destiny Blanda Bruen II
The orthogonal features, when combined, can explode into complexity.
```

The title comes first. On the next line is the byline. On the following line is the text of the article.

You may need to write out the `print_many_articles` method in order to ascertain that your output is formatted correctly.

### 6. Write the `print_many_articles` method to print all the articles

The `print_many_articles` should print all the articles passed into the method.  It should use the `print_one_article` to print each article.

### 7. Run your code with `ruby newsletter.rb` and verify that it matches the sample output in `sample_output.txt`

At this point, your output should match the output in `sample_output.txt`

**After you check that you are getting the right output, commit your solution.** That way you have a snapshot of your working version before you make any further changes.

### Clean up and Submit

Take a look at your solution to see if there is any code you'd like to clean up. Add comments to explain anything that might be confusing. Remove commented-out code that is no longer used. Check that any variable names you've used are meaningful and clear. If there is any shared or reused logic between methods, see if you can extract it into a helper method. As you refactor, make sure to check your output to see that your solution still works.

Once you have cleaned up your solution to your satisfaction, commit again and submit your code.

## Rubric

### Ruby Syntax Basics

1. Invalid syntax, code does not execute.
2. Valid syntax, but does not correctly use conditional statements, looping constructs, and methods.
3. Valid syntax. Use of conditional statements, looping constructs, and methods is incomplete or with some errors.
4. Valid syntax. Correct use of conditional statements, looping constructs, and methods. Code may have unclear variable names, extraneous comments (like commented-out code), or inconsistent formatting and indentation.
5. Valid syntax. Correct use of conditional statements, looping constructs, and methods. Code uses clear variable and method names, meaningful comments, and consistent formatting and indentation.

### Problem Solving and Debugging

1. Did not fix syntax or logic errors.
2. Fixed syntax errors but not logic errors.
3. Fixed syntax errors and some logic errors.
4. Fixed syntax and logic errors. Output has minor differences from expected output.
5. Fixed syntax and logic errors. Output exactly matches expected output.

### Ruby Arrays, Hashes, and Enumerable methods

1. Incorrect syntax for arrays, hashes, and enumerable methods.
2. Some correct syntax for arrays, hashes, and enumerable methods, but incorrect logic.
3. Correct syntax and logic for either arrays and hashes or enumerable methods.
4. Correct syntax and logic for array and hash manipulation and enumerable methods. Selection of enumerable methods may not be suitable or natural for the task. For example, uses `each` where `filter` would be appropriate.
5. Correct syntax and logic for array and hash manipulation and enumerable methods and appropriate selection of enumerable methods for given task.