package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Authorization;
        import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Spring Data JPA repository for the Authorization entity.
 */
public interface AuthorizationRepository extends JpaRepository<Authorization, Long> {

    List<Authorization> findByStudyStudyOidAndStudyInstanceUrlIgnoreCase(String studyOid,String instanceUrl);

}
