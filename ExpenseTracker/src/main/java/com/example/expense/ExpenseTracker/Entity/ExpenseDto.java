package com.example.expense.ExpenseTracker.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseDto {
    private String title;
    private double amount;
    private String category;
    private LocalDate date;

}
