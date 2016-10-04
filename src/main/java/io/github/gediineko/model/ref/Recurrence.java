package io.github.gediineko.model.ref;

/**
 * Created by ggolong on 10/4/16.
 */
public enum Recurrence {
    DAILY("Daily"),
    WEEKLY("Weekly"),
    FORTNIGHTLY("Fortnightly"),
    MONTHLY("Monthly"),
    QUARTERLY("Quarterly"),
    BIANUALLY("Bi-Anually"),
    ANUALLY("Anually"),
    NONE("None");

    private String desc;

    Recurrence(String desc) {
        this.desc = desc;
    }

    @Override
    public String toString() {
        return desc;
    }
}
