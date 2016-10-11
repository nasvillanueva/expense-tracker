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
    public static final String NON_EXPENSE = "NON_EXPENSE";

    Category(String desc) {
        this.desc = desc;
    }

    @Override
    public String toString() {
        return desc;
    }

    public static List<Category> nonExpenseList(){
        return Lists.newArrayList(
                INCOME
        );
    }

    public static List<Category> expenseList() {
        return Lists.newArrayList(
                SAVINGS, FOOD, BILLS, HEALTH,
                TRANSPORT, CLOTHES, LEISURE,
                EDUCATION, OTHER
        );
    }
}
