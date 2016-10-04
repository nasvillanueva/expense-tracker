package io.github.gediineko.model.dto.list;

import io.github.gediineko.model.base.dto.BaseWebDto;
import io.github.gediineko.model.entity.Income;
import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * Created by ggolong on 10/4/16.
 */
public class IncomeListDto extends BaseWebDto<Income> {

    public IncomeListDto(Income target) {
        super(target);
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

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", getId())
                .append("value", getValue())
                .append("description", getDesc())
                .toString();
    }
}
