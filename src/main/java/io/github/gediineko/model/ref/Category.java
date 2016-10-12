package io.github.gediineko.model.ref;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by ggolong on 10/4/16.
 */
public enum Category {
    FOOD("Food"),
    BILLS("Bills"),
    HEALTH("Health"),
    TRANSPORT("Transport"),
    CLOTHES("Clothes"),
    LEISURE("Leisure"),
    EDUCATION("Education"),
    OTHER("Other"),

    // Special
    INCOME("Income"),
    SAVINGS("Savings");

    private String desc;

    public static final String EXPENSE = "EXPENSE";
    public static final String INCOME_STR = "INCOME_STR";
    public static final String SAVINGS_STR = "SAVINGS_STR";

    Category(String desc) {
        this.desc = desc;
    }

    @Override
    public String toString() {
        return desc;
    }

    public static List<Category> incomeList(){
        return Lists.newArrayList(
                INCOME
        );
    }

    public static List<Category> savingsList(){
        return Lists.newArrayList(
                SAVINGS
        );
    }

    public static List<Category> expenseList() {
        return Lists.newArrayList(
                FOOD, BILLS, HEALTH,
                TRANSPORT, CLOTHES, LEISURE,
                EDUCATION, OTHER
        );
    }
}
