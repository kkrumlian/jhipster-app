package com.mycompany.myapp.web.rest;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.inject.Inject;

import org.joda.time.LocalDate;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.mycompany.myapp.Application;
import com.mycompany.myapp.domain.Authorization;
import com.mycompany.myapp.repository.AuthorizationRepository;


/**
 * Test class for the AuthorizationResource REST controller.
 *
 * @see AuthorizationResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class,
    DirtiesContextTestExecutionListener.class,
    TransactionalTestExecutionListener.class })
@ActiveProfiles("dev")
public class AuthorizationResourceTest {
  
  private static final Long DEFAULT_ID = new Long(1L);

  private static final String DEFAULT_INSTANCE_URL = "pformUrl";

  private static final String UPD_INSTANCE_URL = "pformUrlUpt";

  private static final String DEFAULT_STUDY_OID = "pformApiKey";

  private static final String UPD_STUDY_OID = "pformApiKeyUpt";

  @Inject
  private AuthorizationRepository authorizationRepository;

  private MockMvc restAuthorizationMockMvc;
  
  private Authorization authorization;

  @Before
  public void setup() {
      MockitoAnnotations.initMocks(this);
      AuthorizationResource authorizationResource = new AuthorizationResource();
      ReflectionTestUtils.setField(authorizationResource, "authorizationRepository", authorizationRepository);

      this.restAuthorizationMockMvc = MockMvcBuilders.standaloneSetup(authorizationResource).build();

      authorization = new Authorization();
      authorization.setId(DEFAULT_ID);
      authorization.setPformUrl(DEFAULT_INSTANCE_URL);
      authorization.setPformApiKey(DEFAULT_STUDY_OID);
  }

  @Test
  public void testCRUDAuthorization() throws Exception {

  	// // Create Authorization
  	// restAuthorizationMockMvc.perform(post("/app/rest/authorizations")
  	// 		.contentType(TestUtil.APPLICATION_JSON_UTF8)
   //            .content(TestUtil.convertObjectToJsonBytes(authorization)))
   //            .andExpect(status().isOk());

  	// // Read Authorization
  	// restAuthorizationMockMvc.perform(get("/app/rest/authorizations/{id}", DEFAULT_ID))
   //            .andExpect(status().isOk())
   //            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
   //            .andExpect(jsonPath("$.id").value(DEFAULT_ID.intValue()))
   //            .andExpect(jsonPath("$.pformUrl").value(DEFAULT_INSTANCE_URL))
   //            .andExpect(jsonPath("$.pformApiKey").value(DEFAULT_STUDY_OID));

  	// // Update Authorization
   //    authorization.setPformUrl(UPD_INSTANCE_URL);
   //    authorization.setPformApiKey(UPD_STUDY_OID);

  	// restAuthorizationMockMvc.perform(post("/app/rest/authorizations")
  	// 		.contentType(TestUtil.APPLICATION_JSON_UTF8)
   //            .content(TestUtil.convertObjectToJsonBytes(authorization)))
   //            .andExpect(status().isOk());

  	// // Read updated Authorization
  	// restAuthorizationMockMvc.perform(get("/app/rest/authorizations/{id}", DEFAULT_ID))
   //            .andExpect(status().isOk())
   //            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
   //            .andExpect(jsonPath("$.id").value(DEFAULT_ID.intValue()))
   //            .andExpect(jsonPath("$.pformUrl").value(UPD_INSTANCE_URL))
   //            .andExpect(jsonPath("$.pformApiKey").value(UPD_STUDY_OID));

  	// // Delete Authorization
  	// restAuthorizationMockMvc.perform(delete("/app/rest/authorizations/{id}", DEFAULT_ID)
   //            .accept(TestUtil.APPLICATION_JSON_UTF8))
   //            .andExpect(status().isOk());

  	// // Read nonexisting Authorization
  	// restAuthorizationMockMvc.perform(get("/app/rest/authorizations/{id}", DEFAULT_ID)
   //            .accept(TestUtil.APPLICATION_JSON_UTF8))
   //            .andExpect(status().isNotFound());

  }
}
