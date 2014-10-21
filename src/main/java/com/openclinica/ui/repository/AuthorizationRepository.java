package com.openclinica.ui.repository;

import com.openclinica.ui.domain.Authorization;
        import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Spring Data JPA repository for the Authorization entity.
 */
public interface AuthorizationRepository extends JpaRepository<Authorization, Long> {

    List<Authorization> findByStudyStudyOidAndStudyInstanceUrlIgnoreCase(String studyOid,String instanceUrl);

}
