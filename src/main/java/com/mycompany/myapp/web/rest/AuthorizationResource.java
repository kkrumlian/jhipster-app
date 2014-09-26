package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Authorization;
import com.mycompany.myapp.repository.AuthorizationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * REST controller for managing Authorization.
 */
@RestController
@RequestMapping("/app")
public class AuthorizationResource {

  private final Logger log = LoggerFactory.getLogger(AuthorizationResource.class);

  @Inject
  private AuthorizationRepository authorizationRepository;

  /**
   * POST  /rest/authorizations -> Create a new authorization.
   */
  @RequestMapping(value = "/rest/authorizations",
          method = RequestMethod.POST,
          produces = "application/json")
  @Timed
  public void create(@RequestBody Authorization authorization) {
      log.debug("REST request to save Authorization : {}", authorization);
      authorizationRepository.save(authorization);
  }

  /**
   * GET  /rest/authorizations -> get all the authorizations.
   */
  @RequestMapping(value = "/rest/authorizations",
          method = RequestMethod.GET,
          produces = "application/json")
  @Timed
  public List<Authorization> getAll() {
      log.debug("REST request to get all Authorizations");
      return authorizationRepository.findAll();
  }

  /**
   * GET  /rest/authorizations/:id -> get the "id" authorization.
   */
  @RequestMapping(value = "/rest/authorizations/{id}",
          method = RequestMethod.GET,
          produces = "application/json")
  @Timed
  public ResponseEntity<Authorization> get(@PathVariable Long id, HttpServletResponse response) {
      log.debug("REST request to get Authorization : {}", id);
      Authorization authorization = authorizationRepository.findOne(id);
      if (authorization == null) {
          return new ResponseEntity<>(HttpStatus.NOT_FOUND);
      }
      return new ResponseEntity<>(authorization, HttpStatus.OK);
  }

  /**
   * DELETE  /rest/authorizations/:id -> delete the "id" authorization.
   */
  @RequestMapping(value = "/rest/authorizations/{id}",
          method = RequestMethod.DELETE,
          produces = "application/json")
  @Timed
  public void delete(@PathVariable Long id) {
      log.debug("REST request to delete Authorization : {}", id);
      authorizationRepository.delete(id);
  }
}
