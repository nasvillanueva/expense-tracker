package io.github.gediineko.model.dto.form;

import io.github.gediineko.model.base.dto.BaseWebDto;
import io.github.gediineko.model.entity.Income;
import io.github.gediineko.model.ref.Category;
import io.github.gediineko.model.ref.Recurrence;
import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * Created by ggolong on 10/5/16.
 */
public class IncomeFormDto extends BaseWebDto<Income> {

    public IncomeFormDto(Income target) {
        super(target);
    }

    public void setId(Long id) {
        getTarget().setId(id);
    }

    public void setValue(Double value) {
        getTarget().setValue(value);
    }

    public void setDesc(String desc) {
        getTarget().setDescription(desc);
    }

    public void setCategory(Category category) {
        getTarget().setCategory(category);
    }

    public void setRecurrence(Recurrence recurrence) {
        getTarget().setRecurrence(recurrence);
    }

    public Long getId() {
        return getTarget().getId();
    }

    public Double getValue() {
        return getTarget().getValue();
    }

    public String getDesc() {
        return getTarget().getDescription();
    }

    public Category getCategory() {
        return getTarget().getCategory();
    }

    public Recurrence getRecurrence() {
        return getTarget().getRecurrence();
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", getId())
                .append("value", getValue())
                .append("description", getDesc())
                .append("category", getCategory())
                .append("recurrence", getRecurrence())
                .toString();
    }
}
