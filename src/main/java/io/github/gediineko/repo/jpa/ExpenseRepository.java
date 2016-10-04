package io.github.gediineko.repo.jpa;

import io.github.gediineko.model.entity.Expense;
import io.github.gediineko.model.entity.Income;
import io.github.gediineko.repo.base.BaseJpaRepo;
import org.springframework.stereotype.Repository;

/**
 * Created by ggolong on 10/4/16.
 */
@Repository
public interface ExpenseRepository extends BaseJpaRepo<Expense, Long> {
}
