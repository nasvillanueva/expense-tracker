package io.github.gediineko.model.ref;

/**
 * Created by ggolong on 10/4/16.
 */
public enum Category {
    FOOD("Food"),
    BILLS("Bills"),
    HEALTH("Health"),
    TRANSPORT("Transport"),
    CLOTHES("Clothes"),
    LEISURE("Lesiure"),
    EDUCATION("Education"),
    OTHER("Other"),

    // Special
    INCOME("Income"),
    SAVINGS("Savings");

    private String desc;

    Category(String desc) {
        this.desc = desc;
    }

    @Override
    public String toString() {
        return desc;
    }
}
