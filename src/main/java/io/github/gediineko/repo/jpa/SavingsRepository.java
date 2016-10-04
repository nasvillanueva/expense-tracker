package io.github.gediineko.repo.jpa;

import io.github.gediineko.model.entity.Savings;
import io.github.gediineko.repo.base.BaseJpaRepo;
import org.springframework.stereotype.Repository;

/**
 * Created by ggolong on 10/4/16.
 */
@Repository
public interface SavingsRepository extends BaseJpaRepo<Savings, Long> {
}
